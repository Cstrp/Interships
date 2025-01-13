/**
 * @param { string } size
 * @param { Map } stockMap
 * @param { Map } statsMap
 * @returns { boolean }
 */
  const allocateSize = (size, stockMap, statsMap) => {
    if (stockMap.get(size) > 0) {

      stockMap.set(size, stockMap.get(size) - 1);

      statsMap.set(size, (statsMap.get(size) || 0) + 1);

      return true;
    }
    return false;
  };


/**
 * @param { Object } store
 * @param { Array } order
 * @returns { Object|boolean }
 */
export const  process = (store, order) => {
	const isArray = Array.isArray(store) && Array.isArray(order);
	const isEmpty = store.length === 0 || order.length === 0;

	if (!isArray || isEmpty) {
    throw new Error('Invalid input: store and order must be arrays with at least one element');
  }

  const stockMap = new Map(store.map(({ size, quantity }) => [size, quantity]));

  const statsMap = new Map();
  const assignment = [];
  let mismatches = 0;


  for (const item of order) {
    const { id, size } = item;

    if (size.length === 1) {

      const [preferredSize] = size;

      if (allocateSize(preferredSize, stockMap, statsMap)) {
        assignment.push({ id, size: preferredSize });
      } else {
        return false;
      }

    } else if (size.length === 2) {
      const [firstSize, secondSize] = size;

      const preferredSize =
        item.masterSize === "s1" ? firstSize : secondSize;
      const alternateSize =
        item.masterSize === "s1" ? secondSize : firstSize;

      if (allocateSize(preferredSize, stockMap, statsMap)) {
        assignment.push({ id, size: preferredSize });
      } else if (allocateSize(alternateSize, stockMap, statsMap)) {
        assignment.push({ id, size: alternateSize });
        mismatches++;
      } else {
        return false;
      }
    }
  }

  const stats = Array.from(statsMap.entries())
    .map(([size, quantity]) => ({ size, quantity }))
    .sort((a, b) => a.size - b.size);

  return {
    stats,
    assignment,
    mismatches,
  };
}

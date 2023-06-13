export interface Collection {
  id: number;
  title: string;
  description: string;
  imgSrc?: string | null;
  userId: number;
}

// -- Создание таблицы "collections"
// CREATE TABLE collections (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     description TEXT,
//     theme VARCHAR(255),
//     image_url VARCHAR(255),
//     user_id INT NOT NULL,
//     FOREIGN KEY (user_id) REFERENCES users(id)
// );
//
// -- Создание таблицы "items"
// CREATE TABLE items (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     description TEXT,
//     collection_id INT NOT NULL,
//     FOREIGN KEY (collection_id) REFERENCES collections(id)
// );
//
// -- Создание таблицы "tags"
// CREATE TABLE tags (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL
// );
//
// -- Создание связующей таблицы "item_tags"
// CREATE TABLE item_tags (
//     item_id INT NOT NULL,
//     tag_id INT NOT NULL,
//     PRIMARY KEY (item_id, tag_id),
//     FOREIGN KEY (item_id) REFERENCES items(id),
//     FOREIGN KEY (tag_id) REFERENCES tags(id)
// );

import axios from "axios";

export const removeCollection = async (collectionId: string) => {
  try {
    const res = await axios.delete<{ message: string }>(
      `http://localhost:8080/api/collections/${collectionId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZmQGZmLmNvbSIsImlkIjoiNjQ4YTM4MTNhMzQ1M2Y2MDk1YmViODgwIiwiaWF0IjoxNjg2OTAyOTQ1LCJleHAiOjE2ODY5NDk1NjV9.xb7l6mNfsmayXO7UAO45Ld2N4_Pk27fyfa52vQRDF2s",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

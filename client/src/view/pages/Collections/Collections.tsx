import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CollectionList, CreateBtn, TagCloud } from "../../components";
import {
  api,
  Collection as Collection,
  collectionStore,
  isAuth,
  ROUTER_PATHS,
} from "../../../data";
import { Button, CircularProgress } from "@mui/material";
import { observer } from "mobx-react";
import axios from "axios";

export const Collections = observer(() => {
  const { pathname } = useLocation();
  const [loaded, setLoaded] = useState<boolean>(false);

  const { collections } = collectionStore;

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await api.get<{ collections: Collection[] }>(
          "/collections"
        );

        collectionStore.setCollection(res.data.collections);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(true);
      }
    };

    fetchCollections();

    const collectionTimer = setInterval(() => {
      fetchCollections();
    }, 7777);

    return () => {
      clearInterval(collectionTimer);
    };
  }, []);

  const [file, setFile] = useState<File | null>(null);

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files && evt.target.files.length > 0) {
      setFile(evt.target.files[0]);
    }
  };

  const submitFile = async (file: File | null) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const res = await axios.post("http://localhost:8080", formData);

        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {pathname === ROUTER_PATHS.COLLECTIONS ? (
        <>
          {loaded ? (
            <>
              <CollectionList collections={collections} />
              {isAuth() && <CreateBtn />}
            </>
          ) : (
            <div className={"flex items-center justify-center"}>
              <CircularProgress color="inherit" />
            </div>
          )}
        </>
      ) : (
        <Outlet />
      )}
      <input type="file" onChange={handleOnChange} />
      <Button onClick={() => submitFile(file)} variant={"contained"}>
        GO!
      </Button>
      <TagCloud />
    </>
  );
});

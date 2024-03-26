import React, { useState, useEffect, useCallback } from "react";
import QuotesList from "../components/QuotesList/QuotesList";
import { get } from "../httprequest/httprequest";
import QuotesForm from "../components/QuotesForm/QuotesForm";

const Quotes = () => {
  const [quotesList, setQuotesList] = useState([]);
  const [petsList, setPetsList] = useState([]);
  const [gettingData, setGettingData] = useState(true);
  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponsePets = (response) => {
    setGettingData(false);
    setPetsList(response);
  };

  const getDataPets = useCallback(() => {
    get(`${url}/pets`, cbResponsePets);
  }, [url]);

  const cbResponse = useCallback(
    (response) => {
      setQuotesList(response);
      getDataPets();
    },
    [getDataPets]
  );

  const getData = useCallback(() => {
    get(`${url}/quotes`, cbResponse);
  }, [url, cbResponse]);

  useEffect(() => {
    gettingData && getData();
  }, [gettingData, url, getData]);

  // console.log(quotesList);

  return (
    <div className="w-full flex flex-row justify-around ">
      <QuotesForm getData={getData} petsList={petsList} />
      <QuotesList quotesList={quotesList} getData={getData} />
    </div>
  );
};

export default Quotes;

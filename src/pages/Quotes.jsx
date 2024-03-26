import React, { useState, useEffect, useCallback } from "react";
import QuotesList from "../components/QuotesList/QuotesList";
import { get } from "../httprequest/httprequest";
import QuotesForm from "../components/QuotesForm/QuotesForm";

const Quotes = () => {
  const [quotesList, setQuotesList] = useState([]);
  const [gettingData, setGettingData] = useState(true);
  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponse = (response) => {
    setGettingData(false);
    setQuotesList(response);
  };

  const getData = useCallback(() => {
    get(`${url}/quotes`, cbResponse);
  }, [url]);

  useEffect(() => {
    gettingData && getData();
  }, [gettingData, url, getData]);

  // console.log(quotesList);

  return (
    <div className="w-full flex flex-row justify-around">
      <QuotesForm getData={getData} />
      <QuotesList quotesList={quotesList} />
    </div>
  );
};

export default Quotes;

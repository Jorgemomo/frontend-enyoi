import React, { useState, useEffect, useCallback } from "react";
import QuotesList from "../components/QuotesList/QuotesList";
import { get } from "../httprequest/httprequest";
import QuotesForm from "../components/QuotesForm/QuotesForm";

const Quotes = () => {
  const [quoteList, setQuoteList] = useState();
  const [gettingData, setGettingData] = useState(true);
  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponse = (response) => {
    setGettingData(false);
    setQuoteList(response);
  };

  const getData = useCallback(() => {
    get(`${url}/quotes`, cbResponse);
  }, [url]);

  useEffect(() => {
    gettingData && getData();
  }, [gettingData, url, getData]);

  return (
    <div>
      <QuotesForm />
      <QuotesList quoteList={quoteList} />
    </div>
  );
};

export default Quotes;

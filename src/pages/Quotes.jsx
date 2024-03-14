import React, { useState, useEffect, useCallback } from "react";
import QuotesList from "../components/QuotesList/QuotesList";
import { get } from "../httprequest/httprequest";

const Quotes = () => {
  const [quoteList, setQuoteList] = useState();
  const [gettiingData, setGettingData] = useState(true);
  const url = process.env.REACT_APP_API_BASE_URL;

  const cbResponse = (response) => {
    setGettingData(false);
    setQuoteList(response);
  };

  const getData = useCallback(() => {
    get(`${url}/quotes`, cbResponse);
  }, [url]);

  useEffect(() => {
    gettiingData && getData();
  }, [gettiingData, url, getData]);

  return (
    <div>
      <QuotesList quoteList={quoteList} />
    </div>
  );
};

export default Quotes;

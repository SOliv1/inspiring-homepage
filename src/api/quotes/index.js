const API_URL = 'https://api.quotable.io/quotes/random?tags=technology,famous-quotes';

export const getQuote = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();

    const quoteData = json[0];
    return {
        quote: quoteData.content,
        author: quoteData.author,
    } 
};

const quotesApi = {
  getQuote,
};

export default quotesApi;

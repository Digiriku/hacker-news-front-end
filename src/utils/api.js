import axios from 'axios';

const hnApiPath = 'https://hacker-news.firebaseio.com/v0/';

const throwIfError = res => {
    if (res.status !== 200) {
        // console.log(res);
        throw Error(res.statusText);
    }
    return res;
}

const getUrl = response => response.data;
const sleep = (msecs) => (
    results => new Promise(resolve => setTimeout(() => resolve(results), msecs))
);

/**
 * [description]
 * @param  {[type]} q [description]
 * @return {[type]}   [description]
 */
export const loadData = (q) => {
    // const encodedQueryString = encodeURIComponent(q);
    const url = `${hnApiPath}topstories.json`

    return axios
        .get(url)
        .then(throwIfError)
        .then(getUrl);

};


export const loadArticles = (articlesArray) => {
    const articles = articlesArray.map((x) => {

        return axios
            .get(`${hnApiPath}/item/${x}.json`)
            .then(throwIfError)
            .then((result) => {
                // console.log(result.data)

                return result.data;
            })
            .then(sleep(1000));

    });
     return Promise.all(articles).then(function(results) {
        return results;
    })
};

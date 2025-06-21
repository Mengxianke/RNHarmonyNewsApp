// 所有api


const DomesticNewsKey = "36de5db81215";


export const getDomesticNews = (page, num = 10) => {
    return new Promise((resolve, reject) => {
        const url = `https://whyta.cn/api/tx/generalnews?key=${DomesticNewsKey}&num=${num}&page=${page}`;
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then(json => {
            if (json.code === 200) {
                const res = json.result.newslist;
                resolve(res);
            } else {
                throw new Error(json.status);
            }
        })
        .catch(e => {
            reject(e.toString())
        })
    });
    
}
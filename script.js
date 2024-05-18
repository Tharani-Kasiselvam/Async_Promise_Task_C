async function apiCall(){
    try{
        let gnews_api = await fetch("https://gnews.io/api/v4/search?q=example&apikey=20660778114d64e6342577aafd0368fa")
        let gnews_content = await gnews_api.json()
        let gnews_articles = gnews_content.articles
        console.log(gnews_articles)
        let news_data = []

        let parent_div = document.createElement("div")
        parent_div.className = "par_div"

        parent_div.innerHTML = `<h1 class="heading">GNews API Data</h1>`
        console.log(gnews_articles.length) 
        let article_div = document.createElement("article")
        article_div.className = "article_div"

                for(let i=0;i<gnews_articles.length;i++){
                    let data = `<div class="aticle_data">
                                <img class="article_image" src="${gnews_articles[i].image}" alt="">
                                <div class="content">
                                <h5 class="text-truncate">${gnews_articles[i].content}</h5>
                                <p>${gnews_articles[i].description}</p>
                                <p><a href="${gnews_articles[i].url}">${gnews_articles[i].url}</a></p>
                                <p><small class="text-muted">${gnews_articles[i].publishedAt}</small></p>
                                </div>
                            </div>`
                        news_data.push(data)

                }
                article_div.innerHTML = news_data.join('')

                document.body.append(parent_div,article_div)
        }catch{error}{
        console.log(error)
    }
    }
apiCall()
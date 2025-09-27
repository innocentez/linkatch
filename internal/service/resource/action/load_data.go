package action

import (
	"linkatch/internal/service/resource/dto"
	"linkatch/internal/service/resource/payload"

	"github.com/gocolly/colly"
)

func LoadData(payload payload.LoadResourceData) dto.ResourceData {
	c := colly.NewCollector(
		colly.UserAgent("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"),
	)

	c.OnRequest(func(r *colly.Request) {
		r.Headers.Set("X-Requested-With", "XMLHttpRequest")
	})

	var title string
	c.OnHTML("meta[property='og:title']", func(e *colly.HTMLElement) {
		title = e.Attr("content")
	})

	var preview string
	c.OnHTML("meta[property='og:image']", func(e *colly.HTMLElement) {
		preview = e.Attr("content")
	})

	err := c.Visit(payload.Link)
	if err != nil {
		panic(err)
	}

	return dto.ResourceData{
		Link:    payload.Link,
		Title:   title,
		Preview: preview,
	}
}

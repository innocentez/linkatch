package model

type Resource struct {
	Id       int    `json:"id"`
	Category *int   `json:"category"`
	Link     string `json:"link"`
	Title    string `json:"title"`
	Preview  string `json:"preview"`
}

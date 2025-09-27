package payload

type CreateResource struct {
	Category int     `json:"category"`
	Link     string  `json:"link"`
	Title    *string `json:"title"`
	Preview  *string `json:"preview"`
}

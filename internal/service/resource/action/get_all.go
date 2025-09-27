package action

import (
	"fmt"
	"linkatch/internal/database"
	"linkatch/internal/model"
)

func GetAll() []model.Resource {
	db := database.Connect()
	defer db.Close()

	rows, err := db.Query(`SELECT id, category_id, link, title, preview FROM resources`)
	if err != nil {
		fmt.Println("db.Query GetCategories:", err)
		return nil
	}
	defer rows.Close()

	var resources []model.Resource
	for rows.Next() {
		var resource model.Resource
		if err := rows.Scan(
			&resource.Id,
			&resource.Category,
			&resource.Link,
			&resource.Title,
			&resource.Preview,
		); err != nil {
			fmt.Println("rows.Scan:", err)
			continue
		}

		resources = append(resources, resource)
	}
	return resources
}

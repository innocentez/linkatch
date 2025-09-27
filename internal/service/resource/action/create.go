package action

import (
	"linkatch/internal/database"
	"linkatch/internal/model"
	"linkatch/internal/service/resource/payload"
)

func Create(payload payload.CreateResource) model.Resource {
	dbConn := database.Connect()
	defer dbConn.Close()

	result, err := dbConn.Exec(`
		INSERT INTO resources (category_id, link, title, preview)
		values ($1, $2, $3, $4)
	`, payload.Category, payload.Link, payload.Title, payload.Preview)
	if err != nil {
		panic(err)
	}
	defer dbConn.Close()

	resourceId, _ := result.LastInsertId()

	row, err := dbConn.Query(`
		SELECT * FROM resources WHERE id = $1
	`, resourceId)
	if err != nil {
		panic(err)
	}

	var resource model.Resource
	for row.Next() {
		err = row.Scan(
			&resource.Id,
			&resource.Category,
			&resource.Link,
			&resource.Title,
			&resource.Preview,
		)
		if err != nil {
			panic(err)
		}
	}
	defer row.Close()

	return resource
}

package database

func Migrate() {
	dbConn := Connect()
	defer dbConn.Close()

	dbConn.Exec(`PRAGMA foreign_keys = ON;`)

	dbConn.Exec(`DROP TABLE IF EXISTS resources;`)
	dbConn.Exec(`DROP TABLE IF EXISTS categories;`)

	dbConn.Exec(`
        CREATE TABLE categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            parent_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
            name TEXT NOT NULL,
            icon TEXT
        );
    `)

	dbConn.Exec(`
        CREATE TABLE resources (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
            link TEXT NOT NULL,
            title TEXT NOT NULL,
            preview TEXT
        );
    `)
}

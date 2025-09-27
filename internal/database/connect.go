package database

import (
	"database/sql"
	"fmt"
	"linkatch/internal/config"
	"os"
	"path/filepath"

	_ "github.com/mattn/go-sqlite3"
)

func Connect() *sql.DB {
	exe, err := os.Executable()
	if err != nil {
		panic(err)
	}

	base := filepath.Dir(exe)
	dbPath := filepath.Join(base, config.DATABASE_PATH)
	if err := os.MkdirAll(filepath.Dir(dbPath), 0o755); err != nil {
		panic(err)
	}

	dsn := fmt.Sprintf("%s?_foreign_keys=on&_busy_timeout=5000", dbPath)

	dbConn, err := sql.Open("sqlite3", dsn)
	if err != nil {
		panic(err)
	}
	if err := dbConn.Ping(); err != nil {
		panic(err)
	}

	dbConn.SetMaxOpenConns(1)
	return dbConn
}

func TestConnect() *sql.DB {
	base, _ := os.Getwd()
	dbPath := filepath.Join(base, "test/"+config.DATABASE_PATH)
	dsn := fmt.Sprintf("%s?_foreign_keys=on&_busy_timeout=5000", dbPath)

	dbConn, err := sql.Open("sqlite3", dsn)
	if err != nil {
		panic(err)
	}
	if err := dbConn.Ping(); err != nil {
		panic(err)
	}

	dbConn.SetMaxOpenConns(1)
	return dbConn
}

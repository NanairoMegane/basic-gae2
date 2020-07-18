package db

import (
	"database/sql"
	"log"
	"time"

	_ "github.com/go-sql-driver/mysql" // for connection
)

// DB is MySQL instance
var DB *sql.DB

func init() {

	dsn := "test_u:test_pw@tcp(localhost:3306)/gae_sql"
	var err error

	if DB, err = sql.Open("mysql", dsn); err != nil {
		log.Fatal(err)
	} else {
		log.Print("DB connect is success.")
	}

	DB.SetMaxIdleConns(10)
	DB.SetMaxOpenConns(10)
	DB.SetConnMaxLifetime(300 * time.Second)
}

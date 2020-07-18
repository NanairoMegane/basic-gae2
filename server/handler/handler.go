package handler

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"local.NanairoMegane/db"
	"local.NanairoMegane/models"
)

// GetTime return server time.
func GetTime(w http.ResponseWriter) {
	fmt.Fprintf(w, "This is Server Response. Now time is : %v", time.Now())
}

// Get400 return status which is 400.
func Get400(w http.ResponseWriter) {
	http.Error(w, "My Bad Request", http.StatusBadRequest)
}

// Get500 return status which is 400.
func Get500(w http.ResponseWriter) {
	http.Error(w, "My Internal Server Error", http.StatusInternalServerError)
}

// TODO
func GetTask(w http.ResponseWriter) {

	if task, err := models.FindTask(context.Background(), db.DB, 1); err != nil {
		log.Fatal(err)
	} else {
		fmt.Fprintf(w, "Task ID : %d , Content: %s", task.TaskID, task.Content)
	}
}

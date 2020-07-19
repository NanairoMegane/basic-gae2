package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
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

// Get400WithInfoErr return status which is 400 and output log which info level.
func Get400WithInfoErr(w http.ResponseWriter) {
	outputLogWithSeverity("My Info Error", "INFO")
	http.Error(w, "My Info Error", http.StatusBadRequest)
}

// Get400WithWarningErr return status which is 400 and output log which warning level.
func Get400WithWarningErr(w http.ResponseWriter) {
	outputLogWithSeverity("My Warning Error", "WARNING")
	http.Error(w, "My Warning Error", http.StatusBadRequest)
}

// TODO
func GetTask(w http.ResponseWriter) {

	if task, err := models.FindTask(context.Background(), db.DB, 1); err != nil {
		log.Fatal(err)
	} else {
		fmt.Fprintf(w, "Task ID : %d , Content: %s", task.TaskID, task.Content)
	}
}

/* Support Method */
func outputLogWithSeverity(msg string, s string) {
	logger := log.New(os.Stdout, "", 0)

	entry := map[string]interface{}{
		"message":  msg,
		"severity": s,
	}

	payload, _ := json.Marshal(entry)
	logger.Println(string(payload))
}

package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"

	"local.NanairoMegane/db"
	"local.NanairoMegane/handler"
)

func main() {

	r := chi.NewRouter()

	cors := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:4000"},
		AllowedMethods: []string{"GET"},
	})
	r.Use(cors.Handler)
	r.Use(middleware.Logger)

	r.Get("/api/time", func(w http.ResponseWriter, r *http.Request) {
		handler.GetTime(w)
	})

	r.Get("/api/err/400", func(w http.ResponseWriter, r *http.Request) {
		handler.Get400(w)
	})

	r.Get("/api/err/500", func(w http.ResponseWriter, r *http.Request) {
		handler.Get500(w)
	})

	r.Get("/api/tasks", func(w http.ResponseWriter, r *http.Request) {
		handler.GetTask(w)
	})

	r.Post("/api/tasks", func(w http.ResponseWriter, r *http.Request) {
		//handler.PostTask(w)
	})

	log.Print("Start Server")
	log.Print(db.DB)

	if err := http.ListenAndServe(":8080", r); err != nil {
		log.Fatal(err)
	}
}

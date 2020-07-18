module github.com/NanairoMegane/basic-gae-sql

go 1.13

require (
	github.com/go-chi/chi v4.1.2+incompatible
	github.com/go-chi/cors v1.1.1
	golang.org/x/net v0.0.0-20200625001655-4c5254603344 // indirect
	local.NanairoMegane/db v0.0.0-00010101000000-000000000000
	local.NanairoMegane/handler v0.0.0-00010101000000-000000000000
)

replace local.NanairoMegane/db => ./db

replace local.NanairoMegane/models => ./models

replace local.NanairoMegane/handler => ./handler

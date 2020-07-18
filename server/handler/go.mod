module github.com/NanairoMegane/basic-gae-sql/handler

require local.NanairoMegane/db v0.0.0-00010101000000-000000000000

require local.NanairoMegane/models v0.0.0-00010101000000-000000000000

replace local.NanairoMegane/db => ../db

replace local.NanairoMegane/models => ../models

go 1.13

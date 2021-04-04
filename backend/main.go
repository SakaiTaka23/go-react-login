package main

import (
	"github.com/SakaiTaka23/go-react-login/database"
	"github.com/SakaiTaka23/go-react-login/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Listen(":5000")
}

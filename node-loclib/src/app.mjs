import express from "express";
import { router as catalogRouter } from "#components/catalog/router.mjs";
import { router as genreRouter } from "#components/genre/router.mjs";
import { router as authorRouter } from "#components/author/router.mjs";
import { router as authRouter } from "#components/auth/router.mjs";
import { session } from "#src/session.mjs";

const app = express();

app.use(express.static("public"));

app.use(session());

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.locals.basedir = app.get("views");

app.use("/", authRouter);
app.use("/catalog", catalogRouter);
app.use("/catalog/genre", genreRouter);
app.use("/catalog/author", authorRouter);

export { app };

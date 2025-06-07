import express from "express";
import documents from "./documents.json" assert { type: "json" };

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.json(documents);
  }

  const results = documents.filter((doc) => {
    for (let value of Object.values(doc)) {
      if (String(value).toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  res.json(results);
});

app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const document = documents.find((doc) => doc.id === id);

  if (!document) {
    return res.status(404).json({ error: "Document not found" });
  }

  res.json(document);
});

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    return res.status(400).json({
      error: "Cannot provide both query parameter q and fields in request body",
    });
  }

  let results = [];

  if (fields) {
    results = documents.filter((doc) => {
      for (let [key, value] of Object.entries(fields)) {
        if (
          !doc[key] ||
          String(doc[key]).toLowerCase() !== String(value).toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    });
  } else {
    if (!query) {
      results = documents;
    } else {
      results = documents.filter((doc) => {
        for (let value of Object.values(doc)) {
          if (String(value).toLowerCase().includes(query.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }
  }

  res.json(results);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

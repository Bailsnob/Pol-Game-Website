import express from "express"; //importing express for its router
import getSession from "./session.mjs";
const router = express.Router(); //start page's router

/* Listen for posts on the start route. */
router.post("/", (req, res) => {
  /* Validate the session. */
  const session = getSession(req.body.id);
  if (!session) {
    // TODO: BAD ID -- need to respond to request
    return;
  }

  /* Ensure that the game hasn't already started. */
  if (session.game.isStarted) {
    // TODO: How to handle attempted restart of game? -- need to respond to req
    return;
  }
  console.log("+++++++++++++++++++++++++++");
  console.log(session.game.start(0, 1));
  // session.game
    // .start(req.body.minYear, req.body.maxYear)
    // .then(({ type, data }) => {
    //   res.contentType(type);
    //   res.send(data);
    // });
});

/* Export the "start" router. */
export default router;

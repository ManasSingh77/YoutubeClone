const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Video = require('./models/Video');

const app = express();
app.use(bodyParser.json());

app.use(
  express.urlencoded({
      extended: true,
      inflate: true,
      limit: "1mb",
      parameterLimit: 5000,
      type: "application/x-www-form-urlencoded",
  })
);
mongoose.connect('mongodb://localhost:27017/videoapp', {
});


app.post('/videos', async (req, res) => {
  const video = new Video({ name: req.body.name });
  await video.save();
  res.json(video);
});


app.get('/videos', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});


app.get('/videos/:id', async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (!video) return res.status(404).send('Video not found');
  video.views++;
  await video.save();
  res.json(video);
});


app.post('/videos/:id/like', async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (!video) return res.status(404).send('Video not found');
  video.likes++;
  await video.save();
  res.json({ likes: video.likes });
});


app.post('/videos/:id/unlike', async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (!video || video.likes <= 0) return res.status(404).send('Invalid unlike');
  video.likes--;
  await video.save();
  res.json({ likes: video.likes });
});


app.post('/videos/:id/comments', async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (!video) return res.status(404).send('Video not found');
  const comment = {
    username: req.body.username,
    text: req.body.text
  };
  video.comments.push(comment);
  await video.save();
  res.json(video.comments);
});


app.delete('/videos/:videoId/comments/:commentId', async (req, res) => {
  const video = await Video.findById(req.params.videoId);
  if (!video) return res.status(404).send('Video not found');
  video.comments.id(req.params.commentId).remove();
  await video.save();
  res.json(video.comments);
});

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) return res.status(400).send('User already exists');
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User created');
  });
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid credentials');
  
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
      expiresIn: '1d'
    });
  
    res.json({ token });
  });

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
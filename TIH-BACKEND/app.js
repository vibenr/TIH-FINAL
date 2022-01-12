require('./ConnectDb/mongoose');
let createError = require('http-errors');
let bcrypt = require('bcryptjs');
let express = require('express');
let path = require('path');
const cors = require('cors');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// const multer=require('multer');

//models
const adminLoginModel = require('./models/admin');
const ServicesModel = require('./models/services');
const CoursesModel = require('./models/courses');
const StartupsModel = require('./models/startups');
const ActivityModel = require('./models/activities');

let app = express();

app.use(
	cors({
		origin: '*',
		methods: [ 'GET', 'POST' ],
		credentials: true
	})
);
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('deployed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../TIH-React/public/')));

//routes for data fetching



app.get('/api/services', (req, res) => {
	let allrecord = ServicesModel.find({}, (err, data) => {
		res.json(data);
	});
});

app.get('/api/courses', (req, res) => {
	let allrecord = CoursesModel.find({}, (err, data) => {
		res.json(data);
	});
});

app.get('/api/startup', (req, res) => {
	let allrecord = StartupsModel.find({}, (err, data) => {
		res.json(data);
	});
});

app.get('/api/activity', (req, res) => {
	let allrecord = ActivityModel.find({}, (err, data) => {
		res.json(data);
	});
});

//routes for data entering

// let Storage=multer.diskStorage({
//   destination:"../TIH-React/public/images/",
//   filename:(req,file,cb)=>{
//     cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
//   }
// })

// let upload=multer({
//   storage:Storage
// }).single('file');

app.post('/addform/SERVICES', (req, res) => {
	let title = req.body.title;
	let description = req.body.description;
	 let image=req.body.image;

	let data = new ServicesModel({
		title,
		description,
		image
	});
	console.log(data);
	res.redirect('/services');
	data.save();
});

app.post('/addform/COURSES', (req, res) => {
	let title = req.body.title;
	let description = req.body.description;
	let image=req.body.file;


	let data = new CoursesModel({
		title,
		description,
		image
	});

	res.redirect('/courses');
	data.save();
});

app.post('/addform/ACTIVITIES', urlencodedParser, (req, res) => {
	let title = req.body.title;
	let description = req.body.description;

	let data = new ActivityModel({
		title,
		description
	});
	res.redirect('/activities');
	data.save();
});

app.post('/addform/STARTUP', (req, res) => {
	let title = req.body.title;
	let description = req.body.description;
	let image=req.body.file;


	let data = new StartupsModel({
		title,
		description,
		image
	});
	console.log(data);
	res.redirect('/startup');
	data.save();
});

// app.post('/addadmin',(req,res)=>{
//   let username=req.body.name;
//   let password=req.body.password;

//     const hashpassword=await bcrypt.hash(password,(err,hash)=>{
//       let adddata=new adminLoginModel({
//         username,password:hashpassword
//       })
//       adddata.save();
//       res.json({success:"Admin Added Successfully"})
//     })

// })

app.post('/checkadmin', urlencodedParser, async (req, res) => {
	
 	let username = req.username;
	let password = req.password;

	let admin = await adminLoginModel.findOne({ username });

	if (admin == null) {
		return res.send('No Admin Found');
	}

	try {
		if (await bcrypt.compare(password, admin.password)) {
			res.send('/addform/data');
		} else {
			res.send('Not Allowed');
		}
	} catch (error) {
		res.status(500).send('server error');
	} 
});

app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

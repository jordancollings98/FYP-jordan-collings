var chai = require("chai");
var chaiHttp = require("chai-http");
var chaiFiles = require('chai-files');
var expect = require('chai').expect;
var myApp = require("../app").myApp;
var server = require("../server/webServer");
var router = require("../routes/index");
var Answer = require("../models/answerSchema");
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var should = chai.should();
var file = chaiFiles.file;
var dir = chaiFiles.dir;
var assert = chai.assert;



chai.use(chaiHttp);

function clickElement(element) {
    try {
        element.trigger("click");
    } catch(err) {
        var event = new MouseEvent("click", {view: window, cancelable: true, bubbles: true});
        element.dispatchEvent(event);
    }
}


describe('GET all pages and expect status 200 | Integration Testing', function () {
	it('Index page returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});
	/*it('Password blog page returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/passwords")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});
	it('Awareness blog page returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/awareness")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});
	it('Ransomware blog page returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/ransomware")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});
	it('Security Policy blog page returns 500', function(){
		chai.request("http://localhost:9000")
		.get("/security-policy")
			.end (function (err,res){
				expect(res).to.have.status(500)
	  });
	});*/
	it('Results page 0-5 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/results")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});
	it('Results page 5-10 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/results-2")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});
	
	it('Quiz page returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});
	
	it('Quiz page 2 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-2")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});	
	it('Quiz page 3 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-3")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});	
	it('Quiz page 4 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-4")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});	
	it('Quiz page 5 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-5")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});	
	it('Quiz page 6 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-6")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});	
	it('Quiz page 7 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-7")
			.end (function (err,res){
				expect(res).to.have.status(200)
	 });
	});	
	it('Quiz page 8 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-8")
			.end (function (err,res){
				expect(res).to.have.status(200)
	   });
	});	
	it('Quiz page 9 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-9")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});	
	it('Quiz page 10 returns 200', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-10")
			.end (function (err,res){
				expect(res).to.have.status(200)
	  });
	});	
	it('Quiz page 11 returns 500', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-11")
			.end (function (err,res){
				expect(res).to.have.status(500)
	  });
	});	
	it('Quiz page 12 returns 500', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-12")
			.end (function (err,res){
				expect(res).to.have.status(500)
	  });
	});
	it('Quiz page 13 returns 500', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-13")
			.end (function (err,res){
				expect(res).to.have.status(500)
	  });
	});
	it('Quiz page 14 returns 500', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-14")
			.end (function (err,res){
				expect(res).to.have.status(500)
	  });
	});
	it('Quiz page 15 returns 500', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-15")
			.end (function (err,res){
				expect(res).to.have.status(500)
	  });
	});
	it('Fake file returns 404, as it does not exist', function(){
		chai.request("http://localhost:9000")
		.get("/fake-file")
			.end (function (err,res){
				expect(res).to.have.status(404)
	  });
	});
});
/* END OF STATUS TESTS */

describe('GET all pages and expect a specific file type | Integration Testing', function () {
	it('Index page returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	/*it('Password blog page returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/passwords")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	it('Awareness blog page returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/awareness")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	it('Ransomware blog page returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/ransomware")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	it('Security Policy blog page returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-policy")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});*/
	it('Results page 0-5 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/results")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	it('Results page 5-10 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/results-2")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	
	it('Quiz page returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	
	it('Quiz page 2 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-2")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});	
	it('Quiz page 3 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-3")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});	
	it('Quiz page 4 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-4")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});	
	it('Quiz page 5 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-5")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});	
	it('Quiz page 6 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-6")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});	
	it('Quiz page 7 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-7")
			.end (function (err,res){
				expect(res).to.be.html;
	 });
	});	
	it('Quiz page 8 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-8")
			.end (function (err,res){
				expect(res).to.be.html;
	   });
	});	
	it('Quiz page 9 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-9")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});	
	it('Quiz page 10 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-10")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});	
	it('Quiz page 11 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-11")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});	
	it('Quiz page 12 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-12")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	it('Quiz page 13 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-13")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	it('Quiz page 14 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-14")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	it('Quiz page 15 returns HTML', function(){
		chai.request("http://localhost:9000")
		.get("/security-test-15")
			.end (function (err,res){
				expect(res).to.be.html;
	  });
	});
	it('Answers are being pulled from database in JSON', function(){
		chai.request("http://localhost:9000")
		.get("/getAnswers")
			.end (function (err,res){
				expect(res).to.be.json;
				expect(file('getAnswers')).to.not.be.empty;
	  });
	});		
});
/* END OF INTEGRATION TESTS*/

/* START OF UNIT TESTS - DATABASE */

describe('Database create operation', function(){
	it('Create an answer', function(done){
		var answer = new Answer({ selection: 'TestData' });
		answer.save()
			.then(() =>{
				assert(!answer.isNew);
				done();
			});
	});
});

describe('Database read operation', function (){
	it('Find one answer by quiz selection', function(done){
		Answer.findOne({ selection: 'Recent' })
			.then((Answer) => {
                assert(Answer.selection === 'Recent'); 
				done();
	
	  });
	});
});

describe('Database delete operation', function (){
	it('Delete all answers with selection(TestData)', function(done){
		Answer.deleteMany({ selection: 'TestData' })
			.then(() => Answer.findOne({ selection: 'TestData' }))
			.then((answer) => {
                assert(answer === null); 
				done();
	
	  });
	});
});

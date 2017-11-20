// Initialize Firebase
    var config = {
        apiKey: "AIzaSyD8d1Jl0mDZT9J545SpYqf24JNgHUY78r0",
        authDomain: "traintime-734db.firebaseapp.com",
        databaseURL: "https://traintime-734db.firebaseio.com",
        projectId: "traintime-734db",
        storageBucket: "traintime-734db.appspot.com",
        messagingSenderId: "525567075310"
    };
    firebase.initializeApp(config);


        // Create a variable to reference the database

        var database = firebase.database();

        var tableRow = $("<tr>");
        var tableData = $("<td>");


        //On click
        $("#add-btn").on("click", function() {
            // Don't refresh the page!
            event.preventDefault();

            var name = $("#train-name").val().trim();
            var role = $("#destination-input").val().trim();
            var time = $("#time-input").val().trim();
            var frequency = $("#frequency-input").val().trim();

            var mWorked = "";
            var totalBilled ="";


            database.ref().push({
                eName: name,
                eRole: role,
                etime: time,
                efrequency: frequency,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            });


            $('#inputForms').each(function() {
                this.reset();
            });

           
            // $("#tableBody").append("<tr> <td>"+ name +"</td>" +
            //                         	"<td>"+ role +"</td>" +
            //                         	"<td>"+ time +"</td>" +
            //                         	"<td>"+ mWorked +"</td>" +
            //                         	"<td>"+ frequency +"</td>" +
            //                         	"<td>"+ totalBilled +"</td> </tr>"

            //                         	);
                                    });

        database.ref().on("child_added", function(snapshot){

        	var name = snapshot.val().eName;
        	var role = snapshot.val().eRole;
        	var time = snapshot.val().etime;
        	var frequency = snapshot.val().efrequency;
        	var mWorked = "";
            var totalBilled ="";
            console.log();
            console.log();
            console.log();
            console.log();
            

        	$("#tableBody").append("<tr> <td>"+ name +"</td>" +
                                    	"<td>"+ role +"</td>" +
                                    	"<td>"+ time +"</td>" +
                                    	"<td>"+ mWorked +"</td>" +
                                    	"<td>"+ frequency +"</td>" +
                                    	// "<td>"+ totalBilled +"</td> </tr>"

                                    	);
                                    


		}, function (errorObject){
		console.log("Errors handled: " + errorObject.code);
		})


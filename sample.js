$(document).ready(function () {
    function score_indicate() {

        let subject_points = [Number($('#national_language').val()),
        Number($('#english').val()),
        Number($('#mathematics').val()),
        Number($('#science').val()),
        Number($('#society').val())
        ];

        let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
        $("#sum_indicate").text(sum);

        let pointaverage = (sum * 100) / 500;
        $('#avarage_indicate').text(pointaverage);


        var all = {
            subject_points,
            sum
        };
        return all;

    };

    function get_achievement() {

        var allreturns = score_indicate();
        var sum = allreturns.sum;
        let percentage = (sum * 100) / 500;
        if (percentage >= 80) {
            return "A";
        }
        else if (percentage >= 60) {
            return "B";
        }
        else if (percentage >= 40) {
            return "C";
        }
        else {
            return "D";
        }
    }

    function get_pass_or_failure() {

        var allreturns = score_indicate();
        var subject_points = allreturns.subject_points;
        let judge;
        number = subject_points.find(element => {
            return element < 60;
        });
        if (number == undefined) {
            judge = "Passed";
        }
        else {
            judge = "Failed";
        }
        return judge;

    }

    function judgement() {


        var achievement = get_achievement();
        var passOrFail = get_pass_or_failure();
        $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement}. ${passOrFail}</label>`);
    };

    $('#national_language, #english, #mathematics, #science, #society').change(function () {
        score_indicate();
    });

    $('#btn-evaluation').click(function () {

        var achievement = get_achievement();
        $('#evaluation').text(achievement);
    });

    $('#btn-judge').click(function () {
        var judge = get_pass_or_failure();

        $('#judge').text(judge);
    });

    $('#btn-declaration').click(function () {
        $('#declaration').text("")
        judgement();
    });
});

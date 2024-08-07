function interviewCheck(gradScore, hscScore, sscScore, CandidateName){

    var result = gradScore>=70 || hscScore>=80 || sscScore>=90
                ? `Congrats ${CandidateName} you are eligible for TCS interview.`
                : `Unfortunately ${CandidateName} you are not eligible for TCS interview.`
    console.log(result);
    
S

}
interviewCheck(80, 86, 90, "Rahul");
interviewCheck(70, 65, 55, "Jay");
interviewCheck(60, 79, 88, "Om");
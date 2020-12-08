var Body = {
    setColor: function (color) {
        $('body').css('color', color)
        //document.querySelector(`body`).style.color = color
    },
    setGraundColor : function (color){
        $('body').css('backgroundColor', color)
        //document.querySelector(`body`).style.backgroundColor = color
    }
}

var Links ={
    SetColor : function (color){
       $('a').css('color', color );
    }
    //     var alist = document.querySelectorAll('a')
    //
    //     var i = 0;
    //     while(i < alist.length){
    //         console.log(alist[i])
    //         alist[i].style.color = color
    //         i = i+ 1;
    //     }
    // }
}

function nightDayHandler(self){
    if(self.value==='night')
    {
        Body.setGraundColor('black')
        Body.setColor('white')
        self.value ='day'

        Links.SetColor('powderblue')
    }
    else
    {
        Body.setGraundColor('white')
        Body.setColor('black')
        self.value='night';

        Links.SetColor('blue')
    }
}
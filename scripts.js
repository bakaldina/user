var chart = AmCharts.makeChart("chartdiv", {
  type: "serial",
  theme: "light",
  autoMargins: false,
  marginLeft: 60,
  marginRight: 8,
  marginTop: 10,
  marginBottom: 26,
  legend: {
    autoMargins: false,
    equalWidths: true,
    horizontalGap: 10,
    markerSize: 10,
    useGraphSettings: true,
    valueWidth: 0
  },
  dataProvider: [
    {
      year: 2004,
      resources: 42,
      federal: 5.2,
      subject: 0
    },
    {
      year: 2005,
      resources: 62,
      federal: 10.7,
      subject: 0
    },
    {
      year: 2006,
      resources: 94,
      federal: 16.4,
      subject: 0
    },
    {
      year: 2007,
      resources: 149.1,
      federal: 19.7,
      subject: 2.2
    },
    {
      year: 2008,
      resources: 199.5,
      federal: 22.0,
      subject: 3.6
    },
    {
      year: 2009,
      resources: 145.7,
      federal: 18.9,
      subject: 1.3
    },
    {
      year: 2010,
      resources: 169.8,
      federal: 20.6,
      subject: 0.6
    },
    {
      year: 2011,
      resources: 204.6,
      federal: 20.0,
      subject: 0.1
    },
    {
      year: 2012,
      resources: 224.1,
      federal: 27.0,
      subject: 0.1
    },
    {
      year: 2013,
      resources: 242.4,
      federal: 32.1,
      subject: 0.1
    },
    {
      year: 2014,
      resources: 345.5,
      federal: 25.7,
      subject: 0.2
    },
    {
      year: 2015,
      resources: 299.0,
      federal: 33.4,
      subject: 0
    },
    {
      year: 2016,
      resources: 295.0,
      federal: 33.4,
      subject: 0
    }
  ],
  valueAxes: [
    {
      stackType: "regular",
      title: "млрд. руб.",
      axisAlpha: 1,
      gridAlpha: 0
    }
  ],
  startDuration: 2,
  graphs: [
    {
      balloonText:
        "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
      fillAlphas: 0.8,
      lineAlpha: 0.3,
      title: "Средства недропользователей",
      type: "column",
      color: "#000000",
      valueField: "resources"
    },
    {
      balloonText:
        "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
      fillAlphas: 0.8,
      lineAlpha: 0.3,
      title: "Федеральный бюджет",
      type: "column",
      color: "#000000",
      valueField: "federal"
    },
    {
      balloonText:
        "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
      fillAlphas: 0.8,
      lineAlpha: 0.3,
      title: "Бюджет субъектов РФ",
      type: "column",
      color: "#000000",
      valueField: "subject"
    }
  ],
  categoryField: "year",
  categoryAxis: {
    gridPosition: "start",
    axisAlpha: 1,
    gridAlpha: 0,
    position: "left"
  },
  export: {
    enabled: true
  }
});
var chart = AmCharts.makeChart("chartdiv1", {
  type: "serial",
  addClassNames: true,
  theme: "light",
  autoMargins: false,
  marginLeft: 70,
  marginRight: 18,
  marginTop: 10,
  marginBottom: 26,
  balloon: {
    horizontalPadding: 10,
    verticalPadding: 8,
    color: "#000"
  },
  legend: {
    autoMargins: false,
    equalWidths: true,
    horizontalGap: 10,
    markerSize: 10,
    useGraphSettings: true,
    valueWidth: 0
  },
  dataProvider: [
    {
      year: 1997,
      expenses: 144,
      income: 102
    },
    {
      year: 1998,
      expenses: 144,
      income: 89
    },
    {
      year: 1999,
      expenses: 146,
      income: 51
    },
    {
      year: 2000,
      expenses: 143,
      income: 62
    },
    {
      year: 2001,
      expenses: 189,
      income: 91
    },
    {
      year: 2002,
      expenses: 197,
      income: 183
    },
    {
      year: 2003,
      expenses: 201,
      income: 98
    },
    {
      year: 2004,
      expenses: 199,
      income: 121
    },
    {
      year: 2005,
      expenses: 186,
      income: 148
    },
    {
      year: 2006,
      expenses: 213,
      income: 1583
    },
    {
      year: 2007,
      expenses: 201,
      income: 171
    },
    {
      year: 2008,
      expenses: 190.4,
      income: 419
    },
    {
      year: 2009,
      expenses: 235.1,
      income: 261
    },
    {
      year: 2010,
      expenses: 265.5,
      income: 280
    },
    {
      year: 2011,
      expenses: 262.2,
      income: 382.6
    },
    {
      year: 2012,
      expenses: 260.7,
      income: 284.7
    },
    {
      year: 2013,
      expenses: 324,
      income: 302.3
    },
    {
      year: 2014,
      expenses: 311.8,
      income: 278.9
    },
    {
      year: 2015,
      expenses: 286.6,
      income: 472.5
    },
    {
      year: 2016,
      expenses: 324,
      income: 428
    }
  ],
  valueAxes: [
    {
      stackType: "regular",
      autoGridCount: "true",
      axisAlpha: 1,
      gridAlpha: 0,
      title: "тонны золота"
    }
  ],
  startDuration: 1,
  graphs: [
    {
      alphaField: "alpha",
      balloonText:
        "<b>[[title]]</b> <br> <span style='font-size:14px'>[[category]]: <b>[[value]] </b> [[additional]]</span>",
      fillAlphas: 0.8,
      lineAlpha: 0.3,
      title: "Объем приращенных запасов золота (ABC1) <br> в тоннах",
      type: "column",
      valueField: "income",
      dashLengthField: "dashLengthColumn"
    },
    {
      id: "graph2",
      balloonText:
        "<b>[[title]]</b> <br> <span style='font-size:14px'>[[category]]: <b>[[value]] </b> [[additional]]</span>",
      bullet: "round",
      lineThickness: 3,
      bulletSize: 7,
      bulletBorderAlpha: 1,
      bulletColor: "#FFFFFF",
      useLineColorForBulletBorder: true,
      bulletBorderThickness: 3,
      fillAlphas: 0,
      lineAlpha: 1,
      title: "Объем добычи золота в тоннах",
      valueField: "expenses",
      dashLengthField: "dashLengthLine"
    }
  ],
  categoryField: "year",
  categoryAxis: {
    gridPosition: "start",
    axisAlpha: 1,
    gridAlpha: 0,
    tickLength: 1
  },
  export: {
    enabled: true
  }
});
$(document).ready(function() {
  $("#userInfo").on("click", function() {
    $(this)
      .closest("li")
      .toggleClass("active");
  });

  $("#menu_icon").on("click", function() {
    $(this)
      .closest(".header__menu")
      .toggleClass("active");
    return false;
  });
});

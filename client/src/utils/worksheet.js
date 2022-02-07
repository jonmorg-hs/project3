import $ from "jquery";

const workSheet = () => {
  var store = window.db
    .transaction(window.DB_STORE_NAME, "readwrite")
    .objectStore(window.DB_STORE_NAME);
  var req;
  try {
    req = store.getAll();
  } catch (e) {
    if (e.name === "DataCloneError")
      console.log("This engine doesn't know how to clone a Blob, use Firefox");
    throw e;
  }
  req.onsuccess = function (evt) {
    console.log("Reading DB successful");
    window.holedata = req.result;
    var html =
      "<img src='images/btn-close@2x.png' style='cursor:pointer;margin-left:5px;width:50px;height:50px;' onclick=\"$('#worksheet').hide();$('#lpanel').hide();$('#panelout').show();$('#panelin').hide()\" ><label style='margin-left:20px;font:bold 30px Arial'><?php echo $id;?></label><div style='text-align:left;font:Bold 30px Arial'></div><br/>";
    html +=
      "<input type='button' value='Hole Sort' class='btn' style='margin-left:10px;width:150px;font:normal 20px Arial' onclick=\"holesort()\" /><input type='button' value='GPS Sort' class='btn' style='margin-left:10px;width:150px;font:normal 20px Arial' onclick=\"gpssort()\" /><br/><div><table id='diptable' style='margin-left:10px;text-align:center;font:normal 20px Arial'><br/>";
    html +=
      "<tr><th style='width:70px' >Hole No</th><th style='width:70px'>Design Depth</th><th style='width:70px'>Redrills</th><th style='width:70px'>Dipped Depth</th><th style='width:70px'>Water</th><th style='width:70px'>Backfill</th><th style='width:70px'>Stemmed</th><th style='width:70px'>Comments</th><tr/>";

    for (var i = 0; i < window.holedata.length; i++) {
      var depth = (window.holedata[i].collar - window.holedata[i].toe).toFixed(
        1
      );
      var bgcolor = "white";
      var difference = window.holedata[i].dipped - depth;
      if (window.holedata[i].dipped * 1 !== 0) {
        if (difference > -0.3 && difference < 0.3) {
          bgcolor = "green";
        } else {
          if (difference > -0.5 && difference < 0.5) {
            bgcolor = "orange";
          } else {
            bgcolor = "red";
          }
        }
      }
      html +=
        "<tr><td><input type='text' id='hid" +
        window.holedata[i].id +
        "' readonly  class='save' readonly style='width:70px;font:normal 20px Arial' value='" +
        window.holedata[i].hole +
        "'/></td><td><input type='number' id='ded" +
        window.holedata[i].id +
        "' class='save' readonly style='width:70px;font:normal 20px Arial' value='" +
        depth +
        "'/></td><td><input type='number' id='red" +
        window.holedata[i].id +
        "' class='save' style='width:70px;font:normal 20px Arial' value=''/></td><td><input type='number' id='did" +
        window.holedata[i].id +
        "' class='save' style='width:70px;font:normal 20px Arial;background-color:" +
        bgcolor +
        "' value='" +
        window.holedata[i].dipped +
        "'/></td><td><input type='number' id='wat" +
        window.holedata[i].id +
        "' class='save' style='width:70px;font:normal 20px Arial' value=''/></td><td><input type='number' id='baf" +
        window.holedata[i].id +
        "' class='save' style='width:70px;font:normal 20px Arial' value=''/></td><td><input type='number' id='stm" +
        window.holedata[i].id +
        "' class='save' style='width:70px;font:normal 20px Arial' value=''/></td><td><textarea id='com" +
        window.holedata[i].id +
        "' class='save' style='width:300px;height:25px;font:normal 20px Arial' ></textarea></td><tr/>";
    }

    html += "</table></div>";
    $("#worksheet").html(html).show();

    $(".save").bind("change", function () {
      var str = $(this).attr("id");
      var hid = str.substr(3);
      hid = hid * 1;
      var store = window.db
        .transaction(window.DB_STORE_NAME, "readwrite")
        .objectStore(window.DB_STORE_NAME);
      var req;
      try {
        req = store.get(hid);
      } catch (e) {
        if (e.name === "DataCloneError")
          console.log(
            "This engine doesn't know how to clone a Blob, use Firefox"
          );
        throw e;
      }
      req.onsuccess = function (evt) {
        console.log("Reading DB successful");
        console.log(req.result);
        console.log(req.result.hole);
        window.holeObj = req.result;
        console.log(window.holeObj.dipped);
        $("#dippedval").val(window.holeObj.dipped);

        var dipped = $("#did" + hid).val() * 1;
        console.log(dipped);
        window.holeObj.dipped = dipped;
        console.log(window.holeObj);
        try {
          req = store.put(window.holeObj);
        } catch (e) {
          if (e.name === "DataCloneError")
            console.log(
              "This engine doesn't know how to clone a Blob, use Firefox"
            );
          throw e;
        }
        req.onsuccess = function (evt) {
          console.log("Writing to DB successful");
          //uploadHole(window.holeObj);
        };
        req.onerror = function () {
          console.error("read db error", this.error);
        };
      };
      req.onerror = function () {
        console.error("read db error", this.error);
      };
    });
  };
  req.onerror = function () {
    console.error("read db error", this.error);
  };
};

export default workSheet;

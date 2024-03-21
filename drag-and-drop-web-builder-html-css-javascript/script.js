$('#bold').on('click', function() {
   document.execCommand('bold', false, null);
});

$('#italic').on('click', function() {
   document.execCommand('italic', false, null);
});

$('#underline').on('click', function() {
   document.execCommand('underline', false, null);
});

$('#align-left').on('click', function() {
   document.execCommand('justifyLeft', false, null);
});

$('#align-center').on('click', function() {
   document.execCommand('justifyCenter', false, null);
});

$('#align-right').on('click', function() {
   document.execCommand('justifyRight', false, null);
});

$('#list-ul').on('click', function() {
   document.execCommand('insertUnorderedList', false, null);
});

$('#list-ol').on('click', function() {
   document.execCommand('insertOrderedList', false, null);
});

$('#fonts').on('change', function() {
   var font = $(this).val();
   document.execCommand('fontName', false, font);
});

$('#size').on('change', function() {
   var size = $(this).val();
   $('.editor').css('fontSize', size + 'px');
});

$('#color').spectrum({
   color: '#000',
   showPalette: true,
   showInput: true,
   showInitial: true,
   showInput: true,
   preferredFormat: "hex",
   showButtons: false,
   change: function(color) {
      color = color.toHexString();
      document.execCommand('foreColor', false, color);
   }
});

$('.editor').perfectScrollbar();


















function readURL(input) {
		if (input.files && input.files[0]) {

			var reader = new FileReader();

			reader.onload = function (e) {
				$('.file-upload-image').attr('src', e.target.result);
				$('.image-upload-wrap').show();
				$('.image-title').html(input.files[0].name);
			};      

			reader.readAsDataURL(input.files[0]);

		}  else {
			$('.image-upload-wrap').hide();
		}
	}
	function removeUpload(){
		$('.file-upload-input').replaceWith($('.file-upload-input').clone());
		$('.image-upload-wrap').hide();
	}

const db = localStorage;

/**
 * short query selector
 *
 * @param      {<type>}  el      { parameter_description }
 * @return     {string}  { description_of_the_return_value }
 */
const _ = (el) => {
	return document.querySelector(el);
};
/**
 * Gets the tpl.
 *
 * @param      {<type>}  element  The element
 * @return     {string}  The tpl.
 */
const getTpl = (element) => {
	return tpl[element];
};

/**
 * Makes an editable.
 *
 * @return     {string}  { description_of_the_return_value }
 */
const makeEditable = () => {
	let elements = document.querySelectorAll('.drop-element');
	let toArr = Array.prototype.slice.call(elements);
	Array.prototype.forEach.call(toArr, (obj, index) => {
		if (obj.querySelector('img')) {
			return false;
		} else {
			obj.addEventListener('click', (e) => {
				e.preventDefault();
				obj.children[0].setAttribute('contenteditable', '');
				obj.focus();
			});
			obj.children[0].addEventListener('blur', (e) => {
				e.preventDefault();
				obj.children[0].removeAttribute('contenteditable');
			});
		}
	});
};
/**
 * Removes a divs to save.
 *
 * @return     {string}  { description_of_the_return_value }
 */
const removeDivsToSave = () => {
	let elements = document.querySelectorAll('.drop-element');
	let toArr = Array.prototype.slice.call(elements);
	let html = '';
	Array.prototype.forEach.call(toArr, (obj, index) => {
    obj.children[0].removeAttribute('contenteditable');
		html += obj.innerHTML;
	});
	return html;
};

/**
 * Templates
 *
 * @type  string
 */
const tpl = {
	'header1': '<h1>I am header 1</h1>',
	'header2': '<h2>I am header 2</h2>',
	'header3': '<h3>I am header 3</h3>',
  'header4': '<h4>I am a header 4</h4>',
  'header5': '<h5>I am a header 5</h5>',
  'header6': '<h6>I am a header 6</h6>',
  'Slider': '<img id="Logopx" src="http://cabinwithlogo.weebly.com/uploads/5/7/7/2/5772740/green-background-2_orig.png"></img>',
  'br': '<br><br>',
  'Sign Up Form': '<form method="post" enctype="text/plain" id="form"><input type="text" id="Name" placeholder="YOUR NAME" class="form-control" required></input><br><input type="text" id="email" placeholder="EMAIL ADDRESS"  class="form-control" required></input><br><input type="text" id="phone" placeholder="578-954-7984" class="form-control" required></input><br><button type="button" class="btn btn-info" id="submit">Send Message</button></form>',
  'Sign In Form': '<form method="post" enctype="text/plain" id="form"><input type="text" id="Name" placeholder="YOUR NAME" class="form-control" required></input><br><input type="text" id="email" placeholder="EMAIL ADDRESS"  class="form-control" required><br><button type="button" class="btn btn-info" id="submit">Send Message</button></form>',
  'Contact Us Form': '<form method="post" enctype="text/plain" id="form"><input type="text" id="Name" placeholder="YOUR NAME" class="form-control" required></input><br><input type="text" id="email" placeholder="EMAIL ADDRESS"  class="form-control" required><br><button type="button" class="btn btn-info" id="submit">Submit</button></form>',
  'Register Form': '<form method="post" enctype="text/plain" id="form"><input type="text" id="Name" placeholder="YOUR NAME" class="form-control" required></input><br><input type="text" id="email" placeholder="EMAIL ADDRESS"  class="form-control" required><br><button type="button" class="btn btn-info" id="submit">Register</button></form>',
	'shortparagraph': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum accumsan velit eget pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum sagittis arcu, nec commodo lacus ultricies vitae. Cras nec mattis leo.</p>',
	'mediumparagraph': '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>',
	'largeparagraph': '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>',
	'ullist': '<ul><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ul>',
	'ollist': '<ol><li>item 1</li><li>item 2</li><li>item 3</li><li>item 4</li></ol>',
  'image': '<img src="http://cabinwithlogo.weebly.com/uploads/5/7/7/2/5772740/green-background-2_orig.png">',
  'Logo 160px by 300px': '<img id="px" src="http://cabinwithlogo.weebly.com/uploads/5/7/7/2/5772740/green-background-2_orig.png">',
  'footer': '<footer>Your Website Name Here (2017)<br><span>All rights reserved</span></footer>',
  'Buy Now Button': '<button type="button" class="btn btn-info">Buy Now</button>',
  'Buy Now Button Black': '<button id="blackbtn" type="button" class="btn btn-info">Buy Now</button>',
  'Buy Now Button White': '<button id="whitebtn" type="button" class="btn btn-info">Buy Now</button>',
  'Add to Cart Button': '<button type="button" class="btn btn-info">Add to Cart</button>',
  'Learn More Button': '<button type="button" class="btn btn-info">Learn More</button>',
  'Shop Now': '<button type="button" class="btn btn-info">Shop Now</button>',
  'View Item': '<button type="button" class="btn btn-info">View Item</button>',
  'View Now': '<button type="button" class="btn btn-info">View Now</button>',
  'View More Button': '<button type="button" class="btn btn-info">View More</button>',
  'Contact Us Button': '<button type="button" class="btn btn-info">Contact Us</button>',
  'View Products': '<button type="button" class="btn btn-info">View Products</button>',
  'View More Products': '<button type="button" class="btn btn-info">View More Products</button>',
  'Our Work': '<button type="button" class="btn btn-info">Our Work</button>',
  'Donate': '<button type="button" class="btn btn-info">Donate</button>',
  'Donate Now': '<button type="button" class="btn btn-info">Donate Now</button>',
  'Get Started': '<button type="button" class="btn btn-info">Get Started</button>',
  'Join Now': '<button type="button" class="btn btn-info">Join Now</button>',
  'Log In': '<button type="button" class="btn btn-info">Log In</button>',
  'Sign Up': '<button type="button" class="btn btn-info">Sign Up</button>',
  'Sign In': '<button type="button" class="btn btn-info">Sign In</button>',
  'View Store': '<button type="button" class="btn btn-info">View Store</button>',
  'About US': '<button type="button" class="btn btn-info">About Us</button>',
  'Break': '<br>',
  'Half Page Paragraph': '<div class="row"><div class="col-lg-5"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum accumsan velit eget pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum sagittis arcu, nec commodo lacus ultricies vitae. Cras nec mattis leo.</p></div></div>',
};

/**
 * init dragula
 *
 * @type  function
 */
const containers = [_('.box-left'), _('.box-right')];
const drake = dragula(containers, {
	copy(el, source) {
		return source === _('.box-left');
	},
	accepts(el, target) {
		return target !== _('.box-left');
	}
});

drake.on('out', (el, container) => {
	if (container == _('.box-right')) {
		el.innerHTML = getTpl(el.getAttribute('data-tpl'));
		el.className = 'drop-element';
		makeEditable();
		db.setItem('savedData', _('.box-right').innerHTML);
	}
	if (container == _('.box-left')) {
		el.innerHTML = el.getAttribute('data-title');
	}
});

/**
 * save in local storage
 */
if (typeof db.getItem('savedData') !== 'undefined') {
	_('.box-right').innerHTML = db.getItem('savedData');
  makeEditable();
};

/**
 * reset
 */
_('.reset').addEventListener('click', (e) => {
	e.preventDefault
	if (confirm('Are you sure ?')) {
		_('.box-right').innerHTML = '';
	}
});

/**
 * save to file
 */
_('.save').addEventListener('click', (e) => {
	e.preventDefault();
	var blob = new Blob([removeDivsToSave()], {
		type: 'text/html;charset=utf-8'
	});
  db.setItem('savedData', _('.box-right').innerHTML);
	saveAs(blob, 'file.html');
});
$(document).bind('dragover', function (e) {
    var dropZone = $('.zone'),
        timeout = window.dropZoneTimeout;
    if (!timeout) {
        dropZone.addClass('in');
    } else {
        clearTimeout(timeout);
    }
    var found = false,
        node = e.target;
    do {
        if (node === dropZone[0]) {
            found = true;
            break;
        }
        node = node.parentNode;
    } while (node != null);
    if (found) {
        dropZone.addClass('hover');
    } else {
        dropZone.removeClass('hover');
    }
    window.dropZoneTimeout = setTimeout(function () {
        window.dropZoneTimeout = null;
        dropZone.removeClass('in hover');
    }, 100);
});
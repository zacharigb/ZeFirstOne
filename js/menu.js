$(document).ready(function(){$("#toggle").click(function(){$(this).toggleClass("active");$("#overlay").toggleClass("open");});$(function(){$('li').click(function(){$('#toggle').removeClass("active");$("#overlay").removeClass("open");});});});
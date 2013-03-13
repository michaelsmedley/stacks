stacks
======

A jQuery plugin to create iOS list-style headers

Recreates the effect from iOS contact lists etc.  When you scroll down a page, the section header scrolls down with you, until you hit the next content header, which follows you from that point

Example use:
<script type="text/javascript">
$(function(){
    $('body').stacks({
        body: '.contentbox', //the parent element which houses the scrolling header
        title: 'h1', // the element you want to scroll
        margin: 16 //as the header gets absolutely positioned when it hits the bottom, you might want to counter some margin or padding issues
    })
})
</script>

***
You might also want to include some CSS to provide styling for fixed, absolute and parent containers, i.e.

    .fixed{position: fixed;top:0;z-index:500;}
    .absolute{position: absolute;width: 100%;margin-bottom:0;z-index:501;bottom: -16px;box-sizing:border-box;}
    .contentbox{position: relative;}

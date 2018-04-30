<?php
	
session_start();
if (!empty($_SESSION['username'])) {
	session_destroy();
	}
?>
<script type="text/javascript"> location.href = 'login.html';</script>

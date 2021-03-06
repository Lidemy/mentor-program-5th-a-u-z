<?php
  require_once 'utility.php';
  !empty($_SESSION['username']) ? $username = htmlspecialchars($_SESSION['username']) : $username = null;
  // 如果 session 抓的到 username 代表有登入，就可以讓 username = session 的 username
  // 如果抓不到，那 username 就是 NULL ，避免出現：Notice: Undefined index: username
  // 如果 get 抓的到 errCode 代表有錯誤碼，就可以讓 errCode = get 的 errCode
  // 如果抓不到，那 errCode 就是 NULL ，避免出現：Notice: Undefined index: errCode
    $id = htmlspecialchars($_REQUEST['id']);
    $sql = "select * from a_u_z_comments where id = ? and username = ?";
    $select_comment = $connect -> prepare($sql);
    $select_comment -> bind_param('is', $id, $username);
    $select_comment_result = $select_comment -> execute();
    $select_comment_result = $select_comment -> get_result();
    $select_comment_result = $select_comment_result -> fetch_assoc();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    <div>
        <h3>歡迎您回來！！<?php echo htmlspecialchars($username) ?> 大人</h3>
    </div>
    <?php
     !empty($_POST['message']) ? $message = $_POST['message'] : $message = null;
     echo '<div class="err">'. $message .'</div>';
    ?>
    <h1 class="board__title">Comments</h1>
    <form class="board__new-comment-form" method="POST" action="handle_update_comment.php">
      <textarea autofocus name="content" rows="5"><?php echo htmlspecialchars($select_comment_result['content']);?></textarea>
      <input class="hide" type="text" name="id" value=<?php echo htmlspecialchars($id) ?>>
      <?php if ($username) {?>
        <!-- 如果有登入，給他送出按鈕 -->
        <input class="board__submit-btn" type="submit" />
        <?php } else {?>
        <h3 class="err">登入後才能發布留言喔</h3> <!-- 如果沒有登入，跟他說要登入喔 -->
      <?php }?>
    </form>
    <div class="board__hr"></div>
  </main>
</body>

</html>
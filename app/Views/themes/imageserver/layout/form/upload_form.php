<!DOCTYPE html>
<html lang="en">

<head>
    <title>Upload Form</title>
</head>

<body>



    <form method="post" enctype="multipart/form-data" action="upload">
        <table class="table table-hover text-nowrap">
            <thead>
                <tr>
                    <th>Width</th>
                    <th>Height</th>

                </tr>
            </thead>

            <tbody>

                <tr>
                    <td> <input type="text" id="fname" name="size['original'][width]" value=""> X<br>
                        <input type="text" id="fname" name="size['medium'][width]" value=""> X<br>
                        <input type="text" id="fname" name="size['small'][width]" value=""> X<br>
                    </td>
                    <td> <input type="text" id="lname" name="size['original'][height]" value=""><br>
                        <input type="text" id="lname" name="size['medium'][height]" value=""><br>
                        <input type="text" id="lname" name="size['small'][height]" value=""><br>
                    </td>


                </tr>

            </tbody>

        </table>

        <input type="file" name="userfile" size="20">
        <br><br>
        <input type="submit" value="upload">
    </form>

</body>

</html>
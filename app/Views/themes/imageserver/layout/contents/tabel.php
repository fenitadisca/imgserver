<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Image List</h3>

                <div class="card-tools">
                    <div class="input-group input-group-sm" style="width: 150px;">
                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                        <div class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Userfile</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {LIST_FILE}
                        <tr>
                            <td></td>
                            <td>{name}</td>
                            <td> <img src="{userfile}" alt="Image" width="200" height="200"><br></img><a
                                    href="{userfile}">{userfile}</a></td>
                            <td> <a href="{SITE_URL}detail"> View <i class="far fa-eye"></i></a></td>

                        </tr>
                        {/LIST_FILE}
                    </tbody>

                </table>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
</div>
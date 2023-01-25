    <section class="content">
      <div class="container-fluid">
          <!-- /.row -->
        <div class="row">
          <div class="col-12">
          
            {!WIDGET_ALERT_SECTION!}

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{table_title} Table</h3>
                
                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                      <a href="{SITE_URL}/blog/new" type="submit" class="btn btn-default"><i class="fas fa-plus"></i></a>
                      
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {BLOG_LIST} 
                    <tr>
                      <td>{blog_no}</td>
                      <td>{blog_title}</td>
                      <td>{!blog_image!}</td>
                      <td><span class="tag tag-success">{!blog_status!}</span></td>
                      <td>{!blog_actions!}</td>
                    </tr>
                  {/BLOG_LIST} 
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div>
    </section>    
<section class="content">
      <div class="container-fluid">
          <!-- /.row -->
        <div class="row">
          <div class="col-12">
            
            {!WIDGET_ALERT_SECTION!}

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{table_title} Form</h3>
                
                <div class="card-tools">
                  
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                
              <form role="form" action="{URL_SLIDER_SAVE}" method="POST">
                <input type="hidden" name="id" value="{slider_id}"> 
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" class="form-control" id="slider_title" name="slider_title" value="{slider_title}" placeholder="Title">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Link</label>
                    <input type="text" class="form-control" id="slider_link" name="slider_link" value="{slider_link}"  placeholder="Link">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">File Image</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="slider_image" name="slider_image">
                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="slider_is_active" name="slider_is_active" value="{slider_is_active}">
                    <label class="form-check-label" for="exampleCheck1">Is Active</label>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>     


              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <!-- /.row -->
      </div>
    </section>    
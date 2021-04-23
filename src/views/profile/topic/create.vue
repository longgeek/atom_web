<script>
import ProfileLeft from "@/views/profile/profile-left";
import ProfileHeader from "@/views/profile/profile-header";

export default {
    data() {
        return {}
    },
    components: { ProfileLeft, ProfileHeader },
}
</script>

<template>
    <section class="section">
        <ProfileHeader />
        <div class="container">
            <div class="row mt-4">
                <ProfileLeft />
                <div class="col-lg-9 col-md-9 col-12 mt-5 pt-2 mt-sm-0 pt-sm-0">
                    <div class="card">
                        <div class="card-body p-4">
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>讲师名字 :</label>
                                            <div class="position-relative">
                                                <user-icon class="fea icon-sm icons"></user-icon>
                                                <input
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    class="form-control pl-5"
                                                    placeholder="First Name :"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>所属公司及职位 :</label>
                                            <div class="position-relative">
                                                <mail-icon class="fea icon-sm icons"></mail-icon>
                                                <input
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    class="form-control pl-5"
                                                    placeholder="Your email :"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Subject :</label>
                                            <div class="position-relative">
                                                <book-icon class="fea icon-sm icons"></book-icon>
                                                <input
                                                    name="subject"
                                                    id="subject"
                                                    class="form-control pl-5"
                                                    placeholder="Your subject :"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Url :</label>
                                            <div class="position-relative">
                                                <globe-icon class="fea icon-sm icons"></globe-icon>
                                                <input
                                                    name="url"
                                                    id="url"
                                                    type="url"
                                                    class="form-control pl-5"
                                                    placeholder="Url :"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Description :</label>
                                            <div class="position-relative">
                                                <message-circle-icon
                                                  class="fea icon-sm icons"
                                                ></message-circle-icon>
                                                <textarea
                                                  name="comments"
                                                  id="comments"
                                                  rows="4"
                                                  class="form-control pl-5"
                                                  placeholder="Describe your problem :"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->
                                    <div class="col-md-12">
                                        <div class="form-group position-relative">
                                            <div class="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    class="custom-control-input"
                                                    id="customCheck1"
                                                />
                                                <label class="custom-control-label" for="customCheck1">
                                                    I Accept
                                                    <a href="#" class="text-primary">
                                                        Terms And Condition
                                                    </a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end row-->

                                <div class="row">
                                    <div class="col-sm-12">
                                        <input
                                          type="submit"
                                          id="submit"
                                          name="send"
                                          class="btn btn-primary"
                                          value="Submit"
                                        />
                                    </div>
                                    <!--end col-->
                                </div>
                                <!--end row-->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

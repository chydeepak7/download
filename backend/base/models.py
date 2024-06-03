from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
# Create your models here.

def validate_file_size(value):
    filesize = value.size
    if filesize > 5 * 1024 * 1024 * 1024:  # 5 GB in bytes
        raise ValidationError("The maximum file size that can be uploaded is 5 GB.")
# class File(models.Model):
#     file = models.FileField(validators=[validate_file_size])
#     def __str__(self):
#         return self.file.name

class Files(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_name = models.FileField(validators=[validate_file_size])
    # file_name = models.ForeignKey(File, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(editable=False,primary_key=True)

    def __str__(self):
        return self.file_name.name



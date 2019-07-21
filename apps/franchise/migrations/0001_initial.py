# Generated by Django 2.2.3 on 2019-07-16 21:40

from django.db import migrations, models
import django.db.models.deletion
import django_tenants.postgresql_backend.base


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Franchise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('schema_name', models.CharField(db_index=True, max_length=63, unique=True, validators=[django_tenants.postgresql_backend.base._check_schema_name])),
                ('name', models.CharField(max_length=100, verbose_name='nombre del tenant *')),
                ('description', models.CharField(max_length=100, verbose_name='descripción del tenant *')),
                ('address', models.CharField(max_length=100, verbose_name='dirección del tenant *')),
                ('phone', models.CharField(max_length=100, verbose_name='teléfono del tenant *')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Domain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain', models.CharField(db_index=True, max_length=253, unique=True)),
                ('is_primary', models.BooleanField(db_index=True, default=True)),
                ('tenant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='domains', to='franchise.Franchise')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

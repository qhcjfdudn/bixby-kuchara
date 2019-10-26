from rest_framework import serializers
from .models import MovieSchedules
from .models import Movies
from .models import Theaters


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = '__all__'

class TheaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theaters
        fields = '__all__'

class MovieSchuduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieSchedules
        fields = '__all__'
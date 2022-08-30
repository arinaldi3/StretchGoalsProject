from django.test import TestCase

# Create your tests here.
# from unittest import TestCase
# from recipes.models import Ingredient, Recipe
# from recipes.templatetags.servings_mod import modify

# class ResizeToTests(TestCase):
#     def test_error_when_ingredient_is_none(self):
#         with self.assertRaises(AttributeError):
#             modify(None, 5)

#     def test_recipe_has_no_serving(self):
#         # arranging values
#         # setting the serving value in recipe class to none 
#         # and calling it recipe (for our ingredient.servings call)
#         recipe = Recipe(servings=None)
#         # ingredient amount set to 5
#         ingredient = Ingredient(recipe=recipe, amount=5)

#         # Act by using modify function
#         expected = 5
#         result = modify(ingredient, None)

#         # Assert
#         self.assertEqual(result, expected)

#     def test_values_for_servings_amount_and_target(self):
#         recipe = Recipe(servings=2)
#         ingredient = Ingredient(recipe=recipe, amount=5)

#         expected = 25
#         result = modify(ingredient, 10)

#         self.assertEqual(result, expected)

#     def test_target_is_letters(self):
#         recipe = Recipe(servings=2)
#         ingredient = Ingredient(recipe=recipe, amount=5)

#         expected = 5
#         result = modify(ingredient, "abc")

#         self.assertEqual(result, expected)




# class ProblemTests(TestCase):
#     def test_returns_min_value_if_first_parameter(self):
#         value = minimum_value(1, 3)
#         self.assertEqual(1, value)

#     def test_returns_min_value_if_second_parameter(self):
#         value = minimum_value(3, 2)
#         self.assertEqual(2, value)
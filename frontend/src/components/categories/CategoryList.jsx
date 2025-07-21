import { useState } from 'react';
import { Plus } from 'lucide-react';
import CategoryCard from './CategoryCard';
import CategoryForm from './CategoryForm';

const CategoryList = ({ categories = [], onEdit, onDelete, onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShowForm(true);
  };

  const handleAdd = () => {
    setSelectedCategory(null);
    setShowForm(true);
  };

  const handleFormSubmit = (categoryData) => {
    if (selectedCategory) {
      onEdit(selectedCategory._id, categoryData);
    } else {
      onAdd(categoryData);
    }
    setShowForm(false);
    setSelectedCategory(null);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedCategory(null);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
        <button
          onClick={handleAdd}
          className="btn btn-primary flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Category</span>
        </button>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-500 mb-4">No categories found</div>
          <button
            onClick={handleAdd}
            className="btn btn-primary"
          >
            Create Your First Category
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              onEdit={handleEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      {showForm && (
        <CategoryForm
          category={selectedCategory}
          onSubmit={handleFormSubmit}
          onClose={handleFormClose}
        />
      )}
    </>
  );
};

export default CategoryList;

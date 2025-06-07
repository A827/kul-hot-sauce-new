import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('products');

  // Products State
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editHeat, setEditHeat] = useState('');

  // Homepage Content State
  const [homepageTitle, setHomepageTitle] = useState('');
  const [homepageTagline, setHomepageTagline] = useState('');

  // About Page Content State
  const [aboutText, setAboutText] = useState('');

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      router.push('/admin/login');
    }

    const fetchData = async () => {
      // Fetch products from Firestore
      const productsSnapshot = await getDocs(collection(db, 'products'));
      const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);

      // Fetch homepage content
      const homepageSnapshot = await getDocs(collection(db, 'homepage'));
      homepageSnapshot.forEach(doc => {
        const data = doc.data();
        setHomepageTitle(data.title);
        setHomepageTagline(data.tagline);
      });

      // Fetch about page content
      const aboutSnapshot = await getDocs(collection(db, 'about'));
      aboutSnapshot.forEach(doc => {
        setAboutText(doc.data().content);
      });
    };

    fetchData();
  }, [router]);

  // Product Handlers
  const handleAddProduct = async (name, description, image, heat) => {
    await addDoc(collection(db, 'products'), { name, description, image, heat });
    window.location.reload();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'products', id));
    window.location.reload();
  };

  const handleEditSave = async () => {
    const productId = products[editIndex].id;
    await updateDoc(doc(db, 'products', productId), {
      name: editName,
      description: editDescription,
      image: editImage,
      heat: editHeat,
    });
    window.location.reload();
  };

  // Homepage Handlers
  const handleHomepageSave = async (e) => {
    e.preventDefault();
    const homepageSnapshot = await getDocs(collection(db, 'homepage'));
    if (!homepageSnapshot.empty) {
      const homepageDoc = homepageSnapshot.docs[0];
      await updateDoc(doc(db, 'homepage', homepageDoc.id), {
        title: homepageTitle,
        tagline: homepageTagline,
      });
    } else {
      await addDoc(collection(db, 'homepage'), {
        title: homepageTitle,
        tagline: homepageTagline,
      });
    }
    alert('Homepage content saved!');
  };

  // About Page Handlers
  const handleAboutSave = async (e) => {
    e.preventDefault();
    const aboutSnapshot = await getDocs(collection(db, 'about'));
    if (!aboutSnapshot.empty) {
      const aboutDoc = aboutSnapshot.docs[0];
      await updateDoc(doc(db, 'about', aboutDoc.id), {
        content: aboutText,
      });
    } else {
      await addDoc(collection(db, 'about'), {
        content: aboutText,
      });
    }
    alert('About page content saved!');
  };

  // Product Submission
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const file = e.target.image.files[0];
    const heat = e.target.heat.value;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleAddProduct(name, description, reader.result, heat);
      };
      reader.readAsDataURL(file);
    } else {
      handleAddProduct(name, description, '', heat);
    }
  };

  // Edit Handlers
  const handleEditClick = (index) => {
    const product = products[index];
    setEditIndex(index);
    setEditName(product.name);
    setEditDescription(product.description);
    setEditImage(product.image);
    setEditHeat(product.heat);
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditName('');
    setEditDescription('');
    setEditImage('');
    setEditHeat('');
  };

  return (
  <div className="bg-gray-50 min-h-screen p-8">
    <div className="max-w-5xl mx-auto">
      {/* Admin header, nav bar, product section, homepage section, about section */}
      {/* The entire JSX content you had before goes here */}
    </div>
  </div>
);
}
